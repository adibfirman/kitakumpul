import "firebase/firestore";

import React from "react";
import firebase from "firebase/app";
import Router from "next/router";

import { privateRoute } from "@utils";
import * as Types from "./types";

function Categories({ categories }: Types.IProps) {
	const [selected, setSelected] = React.useState<Types.TCategories>(categories);
	const isSelectedOne = React.useMemo(() => {
		return selected.some(category => category.selected);
	}, [selected]);

	function onClicked(index: number) {
		return () => {
			setSelected(item => {
				const copyItem = [...item];
				copyItem[index].selected = !copyItem[index].selected;

				return copyItem;
			});
		};
	}

	return (
		<div>
			<div onClick={() => Router.back()}>Kembali</div>
			<button disabled={!isSelectedOne}>Lanjut</button>
			<h1>Pilih kategori untuk memulai</h1>
			{selected.map((item, i) => (
				<div key={i} onClick={onClicked(i)}>
					{item.name} {item.selected && "V"}
				</div>
			))}
		</div>
	);
}

Categories.getInitialProps = async () => {
	const data: Types.TCategories = [];
	const db = firebase.firestore();
	const querySnapshot = await db.collection("categories").get();

	querySnapshot.forEach(category => {
		const id = category.id;
		const getData = category.data();

		data.push({ id, name: getData.name });
	});

	return { categories: data };
};

export default privateRoute(Categories);
