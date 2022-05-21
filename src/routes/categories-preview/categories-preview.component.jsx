import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment className="categories-preview-container">
            {Object.keys(categoriesMap).map((title) => {
                const product = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={product}
                    ></CategoryPreview>
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
