export type TCategory = {
	name: string;
	id: string;
	selected?: boolean;
};

export type TCategories = Array<TCategory>;

export interface IProps {
	categories: TCategories;
}
