import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";

const SidebarFilterItem = ({ name }) => {
  //const [checked, setChecked] = useState(false);

  /* function handleCheck(isChecked) {
    setChecked(isChecked);

    if (isChecked) {
      dispatch(setBrandName(name));
    }
    if (!isChecked) {
      dispatch(removeBrandName(name));
    }
  } */

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="amul"
        //checked={checked}
        //onCheckedChange={(val) => handleCheck(val)}
      />
      <Label className="text-sm" htmlFor="amul">
        {name}
      </Label>
    </div>
  );
};

export default SidebarFilterItem;
