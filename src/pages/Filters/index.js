import { Filters as Filter, DashboardHeaderPhone } from "../../components";

const Filters = () => {
  return (
    <div>
      <DashboardHeaderPhone
        prevHref="/menu"
        heading="Select your Preferences "
        isSamll={true}
      />
      <Filter />
    </div>
  );
};

export default Filters;
