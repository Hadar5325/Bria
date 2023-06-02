import { Filter } from "../cmps/filter.jsx";


export function Home() {
    return <section className="home-container">
        <Filter />
        <section className="images-section">
            <img className="image image-left" src="../assets/style/images/img1.jpg" />
            <div className="text-left">
                4 יחידות אירוח הטובלות בטבע, כשסביבן שקט, שלווה ונופי מדבר מרהיבים. הצימרים בנויים מעץ ואבן, מעוצבים ברמה גבוהה ומאובזרים
            </div>
            <img className="image image-right" src="../assets/style/images/img2.jpg" />
            <div className="text-right">
                מתחמי אירוח מיוחדים באווירה מדברית המיועדים לזוגות, משפחות ואירוח לקבוצות למטרת לינה אירוע המיועד לקבוצה של עד 40 איש
            </div>
            <div className="slider">
                <div className="slides-wrapper">
                    <div className="slide-active"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
                <div className="slide-indcatoros">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div className="slider">
                    <div className="slides">
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img1.jpg" />
                        </div>
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img2.jpg" />
                        </div>
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img3.jpg" />
                        </div>
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img4.jpg" />
                        </div>
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img5.jpg" />
                        </div>
                        <div className="image-slide">
                            <img className="image-slide" src="../assets/style/images/img6.jpg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </section>
}