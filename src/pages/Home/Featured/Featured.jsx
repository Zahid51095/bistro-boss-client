import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos temporibus labore odio perferendis inventore dignissimos soluta quis commodi fugiat! Atque fugiat consectetur ipsum nobis omnis placeat adipisci quisquam aperiam quaerat, doloribus, magni facere ipsam. Cupiditate magnam porro, nihil iusto quo delectus, provident ut accusantium molestiae dolorum eaque ex odit.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;