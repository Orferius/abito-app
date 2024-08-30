import './SideBar.css';

export const SideBar = ({title, desc, img}) => {
    return (
        <div className="facility">
            <img
                className="facility--img"
                src={img}
                alt={title}
            />
            <h5 className="facility--title">{title}</h5>
            <p className="facility--text">
                {desc}
            </p>
        </div>
    );
};
