import "./App.css";
/* import bootstrap so the component works */
import "bootstrap/dist/css/bootstrap.min.css";
/* components */
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import CatCard from "./assets/components/CatCard";
/* images */
import Cat1 from "./assets/img/cat1.jpg";
import Cat2 from "./assets/img/cat2.jpg";
import Cat3 from "./assets/img/cat3.jpg";
import Cat4 from "./assets/img/cat4.jpg";
import Cat5 from "./assets/img/cat5.jpg";
import Cat6 from "./assets/img/cat6.jpg";

function App() {
    return (
        <>
            {/* Header */}
            <Header title="Adopt a cat" />

            {/* Cards */}
            <section className="card-container">
                <article className="cat-card">
                    <CatCard
                        image={Cat1}
                        name="Walter"
                        description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                        tagColor="danger"
                        tagText="Grumpy"
                    />
                </article>

                <article className="cat-card">
                    <CatCard
                        image={Cat2}
                        name="Alabama"
                        description="She's as sweet as she seems, loves to hang out in different containers, she's a cat that if she fits, she sits. All you need is Alabama."
                        tagColor="dark"
                        tagText="Sweet"
                    />
                </article>

                <article className="cat-card">
                    <CatCard
                        image={Cat3}
                        name="Emma"
                        description="A kind old lady that loves sun, because who doesn't like sun baths? She will always wait for you to join her on her lazy sun times."
                        tagColor="warning"
                        tagText="Sun lover"
                    />
                </article>

                <article className="cat-card">
                    <CatCard
                        image={Cat4}
                        name="Dorito"
                        description="A young but really duck enthusiastic guy, he also get along very well around kids and other animals, but he prefers ducks."
                        tagColor="info"
                        tagText="Playful"
                    />
                </article>

                <article className="cat-card">
                    <CatCard
                        image={Cat5}
                        name="Tamita"
                        description="Tamita loves to help with the house, especially if it is related to plants, she doesn't eat or destroy them, just love to be there."
                        tagColor="success"
                        tagText="Gardener"
                    />
                </article>

                <article className="cat-card">
                    <CatCard
                        image={Cat6}
                        name="Miso"
                        description="This cute girl loves outdoor spaces, she won't do a great scape, but she will be your best friend on hot summer days while you read a book."
                        tagColor="secondary"
                        tagText="Summer lover"
                    />
                </article>
            </section>

            {/* Footer */}
            <Footer footer="Explore our adoption gallery to find the perfect cat for you. We have a lot of different personalities and colors, so you can find the one to take home with you. Adopt a cat and your life will ever be boring again." />
        </>
    );
}

export default App;
