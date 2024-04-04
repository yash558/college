

const ExclusiveDealsBanner: React.FC = () => {
    return (
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className=" flex flex-col mr-4">
            <i className="fas fa-hand-paper text-3xl"></i>
            <span className="ml-2 text-xl font-bold text-black">
             Exclusive deals for you!            
            </span>
            <span className="ml-2 text-sm font-semibold text-gray-700">             
             Want insider tips and exclusive offers for top colleges? Join our College Club now!
            </span>
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
            Join now
          </button>
        </div>
      </div>
    );
  };
  
  export default ExclusiveDealsBanner;
  