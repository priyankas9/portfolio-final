import TypeWriter from "../Typewriter";

const Introduction = () => {
    const typeWriter = ["fresher","frontend developer", "backend developer"];
    return (
        <>
<div className="flex justify-center align-center mt-6">
      <div className="text-4xl font-thin  inline-flex">
      
      And I'm a <p className="text-orange-600 ml-2"> <TypeWriter data={typeWriter} /></p>
        
      </div>
    </div>
        </>
    )
}
export default Introduction;