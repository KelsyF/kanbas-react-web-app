
export default function BootstrapNavigation() {
    return (
        <div>
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
            <div id="wd-css-navigating-with-cards">
                <h2>Cards</h2>
                <div className="card"
                     style={{ width: "18rem" }}>
                    <img src="https://wallpapers.com/images/high/cute-pokemon-pictures-yld52rqjnmvghy68.webp"
                         alt="https://wallpapers.com/images/high/cute-pokemon-pictures-yld52rqjnmvghy68.webp"
                         className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                            Bulbasaur mlem
                        </h5>
                        <p className="card-text">
                            A cute face on a cute pokemon meant to make someone's computer
                            adorable and fun to turn on.
                        </p>
                        <a href="https://youtu.be/HcMeAvf5-xo?si=ninmJV1hLEkZhfsk" className="btn btn-primary">
                            Bulba-out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}