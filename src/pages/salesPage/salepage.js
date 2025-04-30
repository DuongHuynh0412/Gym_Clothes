import { useParams } from 'react-router-dom';
import Sidebar from '../../components/SidebarComponent';
import ContainerComponent from '../../components/ContainerComponent';

function SaleProduct() {
  const { type } = useParams();
  return (
    <div className="pt-20 h-full relative flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="overflow-y-auto w-full ">
        <ContainerComponent />
      </div>
    </div>
  );
}

export default SaleProduct;
