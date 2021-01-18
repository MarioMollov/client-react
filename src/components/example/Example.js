import ClassComponent from '../ClassComponent';
import FunctionalComponent from '../FunctionalComponent';
 
function Example() {
  const data =[{
    title: 'My first functional component'
    },
    {
      title: 'My second functional component'
    },
    {
      title: 'My third functional component'
    }
  ]

  const elemets = data.map((element, index) => {
    return <FunctionalComponent 
        title={element.title} 
        key={index}
      />
  })

  return (
    <>
      <div className="col-4">
        <ClassComponent />
        <ClassComponent />
        <ClassComponent />
      </div>
      <div className='col-4'>
        {elemets}
      </div>
    </>
  );
}

export default Example;
