import { useRouteError, Link } from "react-router-dom";
import '../index.css';

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error-page">
            <img src="/images/404.png" alt="404" className="error-page__img"/>
            <Link to="/" className="btn btn-404">
                Вернуться на главную страницу
            </Link>
        </div>
    );
}