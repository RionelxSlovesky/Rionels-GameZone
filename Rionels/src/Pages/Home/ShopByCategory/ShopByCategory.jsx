import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ByCategoryCard from "./ByCategoryCard/ByCategoryCard";

const ShopByCategory = ({ toys }) => {
  return (
    <div className="px-4">
      <h1 className="text-center text-5xl my-16">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab>Consoles</Tab>
          <Tab>Games</Tab>
          <Tab>Action Figures</Tab>
          <Tab>Merches</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-wrap justify-between gap-6">
            {toys.map((toy) => {
              if (toy.subCategory == "Consoles") {
                return (
                  <ByCategoryCard key={toy._id} toy={toy}></ByCategoryCard>
                );
              }
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-between gap-6">
            {toys.map((toy) => {
              if (toy.subCategory == "Games") {
                return (
                  <ByCategoryCard key={toy._id} toy={toy}></ByCategoryCard>
                );
              }
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-between gap-6">
            {toys.map((toy) => {
              if (toy.subCategory == "Action Figures") {
                return (
                  <ByCategoryCard key={toy._id} toy={toy}></ByCategoryCard>
                );
              }
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-between gap-6">
            {toys.map((toy) => {
              if (toy.subCategory == "Merches") {
                return (
                  <ByCategoryCard key={toy._id} toy={toy}></ByCategoryCard>
                );
              }
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
