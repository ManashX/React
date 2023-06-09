// import Table from "../components/table";
import SortableTable from "../components/SortableTable";
function TablePage(){
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
      ];

      const config = [
        {label: 'Fruit',
        render: (fruit) => {return fruit.name},
        sortValue: (fruit) =>{return fruit.name}
        },
        {label: 'Color',
        render: (fruit) => {return <div className={`p-3 m-2 ${fruit.color}`}></div>},
        },
        {label: 'Score',
        render: (fruit) => {return fruit.score},
        sortValue: (fruit) =>{return fruit.score}
        }
      ]
      return <div>
        <SortableTable data = {data} config = {config}/>
      </div>;
}
export default TablePage;