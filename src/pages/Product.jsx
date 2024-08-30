import { useParams, useOutletContext } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";
import { facilitiesArray } from "../constants";

export const Product = () => {
    const {products} = useOutletContext();
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id);

    return (
        <section className="content">
            <div className="container">
                {findProduct ? (
                    <div className="content-box">
                        <div className="content-product">
                            <div className="content-product__left">
                                <h2 className="content-product__title">
                                    {findProduct.title}
                                </h2>

                                <img
                                    className="content-product__img"
                                    src={findProduct.img}
                                    alt="product-img"
                                />

                                <p className="content-product__text">
                                    {findProduct.desc}
                                </p>
                            </div>

                            <div className="content-product__right">
                                <h2 className="content-product__price">
                                    {findProduct.price}
                                </h2>

                                <button className="btn btn-primary btn-large">
                                    Показать телефон
                                </button>
                            </div>
                        </div>

                        <div className="content-side">
                            <h3 className="content-side__title">
                                Сервисы и услуги
                            </h3>

                            <div className="content-side__box">
                                <div className="content-side__list">
                                    {facilitiesArray.map((item) => (
                                        <SideBar
                                            key={item.id}
                                            title={item.title}
                                            desc={item.desc}
                                            img={item.img}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="content-side__footer">
                                <p className="content-side__footer--item">
                                    © ООО «Абито», 2011–2021
                                </p>
                                <a
                                    href="#!"
                                    className="content-side__footer--item"
                                >
                                    Политика конфиденциальности
                                </a>
                                <a
                                    href="#!"
                                    className="content-side__footer--item"
                                >
                                    Обработка данных
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>Такого товара не существует!</h2>
                )}
            </div>
        </section>
    );
};