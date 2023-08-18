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
            <section className="cat-card">
                <CatCard
                    image={Cat1}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            <section className="cat-card">
                <CatCard
                    image={Cat2}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            <section className="cat-card">
                <CatCard
                    image={Cat3}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            <section className="cat-card">
                <CatCard
                    image={Cat4}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            <section className="cat-card">
                <CatCard
                    image={Cat5}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            <section className="cat-card">
                <CatCard
                    image={Cat6}
                    name="Walter"
                    description="Although he seems a little grumpy, actually is really really grumpy, so if you want a cat but you don't like interactions, Rolo should be your choice."
                    tagColor="success"
                    tagText="Grumpy"
                />
            </section>

            {/* Footer */}
            <Footer footer="Explore our adoption gallery to find the perfect cat for you. We have a lot of different personalities and colors, so you can find the one to take home with you. Adopt a cat and your life will ever be boring again." />
        </>
    );
}

export default App;
