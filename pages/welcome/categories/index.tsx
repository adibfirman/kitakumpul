import "firebase/firestore";

import React from "react";
import firebase from "firebase/app";
import Router from "next/router";
import qs from "query-string";

import { privateRoute } from "@utils";
import { IProps, TCategories } from "./types";

function Categories({ categories }: IProps) {
	const [selected, setSelected] = React.useState<TCategories>(categories);
	const selectedData = React.useMemo(() => {
		return selected.filter(category => category.selected);
	}, [selected]);

	function onChange(index: number) {
		return () => {
			setSelected(item => {
				const copyItem = [...item];
				copyItem[index].selected = !copyItem[index].selected;

				return copyItem;
			});
		};
	}

	function onNext() {
		const categories = [...selectedData].map(item => item.id);
		const params = { ...Router.query, categories };

		Router.push({
			pathname: "/welcome/groups",
			query: qs.stringify(params)
		});
	}

	return (
		<div>
			<div onClick={() => Router.back()}>Kembali</div>
			<button onClick={onNext} disabled={!selectedData.length}>
				Lanjut
			</button>
			<h1>Pilih kategori untuk memulai</h1>
			{selected.map((item, i) => (
				<div key={i}>
					<input type="checkbox" id={item.name} onChange={onChange(i)} />
					<label htmlFor={item.name}>{item.name}</label>
				</div>
			))}
		</div>
	);
}

Categories.getInitialProps = async () => {
	const data: TCategories = [];
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
