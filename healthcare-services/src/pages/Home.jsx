import Header from "../components/Header/Header";
import ServiceListing from "../components/ServiceListing/ServiceListing";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#f0f0f0",
          paddingTop: "7px",
        }}
      >
        <ServiceListing />
      </div>
    </>
  );
};

export default Home;
