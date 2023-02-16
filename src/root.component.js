import LaborForAllStores from "./components/labor-for-all-stores";
import LaborWidget from "./components/labor-widget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaborForStoreOneGrocery from "./components/labor-for -store-one-grocery";
import LaborForStoreOne from "./components/labor-for-store-one";
import LaborForTodayInsight from "./components/labor-for-today-insight";
import LaborOverages from "./components/labor-overages";
import Laborberkotsuperfoods from "./components/labor-berkots-foods-overages";
import LaborBerkotsMeatDePartment from "./components/labor-berkots-meat-department";

export default function Root(props) {
  return (
    <div>
    <Router primary={false}>
            <div>
            <Routes>
                <Route path="/" element={<LaborWidget />} />
                <Route  path="/labor/labortodayinsight" element={<LaborForTodayInsight />} />
                <Route  path="/labor/laborforallstores" element={<LaborForAllStores />} />
                <Route   path="/labor/laborforstore1" element={<LaborForStoreOne /> } />
                <Route path="/labor/laborstore1grocery" element={<LaborForStoreOneGrocery />} />
                <Route path="/labor/laboroverages" element={<LaborOverages />} />
                <Route path="/labor/berkotsuperfoodsoverages" element={<Laborberkotsuperfoods />} />
                <Route path="/labor/berkotsuperfood/meatdepartment" element={<LaborBerkotsMeatDePartment />} />
            </Routes>
            </div>
          </Router>
        </div>
  );
}
