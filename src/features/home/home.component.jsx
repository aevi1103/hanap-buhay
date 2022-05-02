import { Button } from '@chakra-ui/react';

const Home = () => (
  <div className="flex flex-col mx-32 h-screen">
    <div className="flex flex-row items-center mt-10 w-full">
      <div className="w-1/5 bg-slate-200 mx-2 drop-shadow flex flex-col rounded-md p-5">
        <a className="text-slate-500">Jobs Feed</a>
        <a to="/messages" className="text-slate-500">
          Messages
        </a>
        <a className="text-slate-500">Hub</a>
      </div>

      <div className="w-3/5 flex flex-col items-center justify-start bg-slate-200 mx-2 rounded-md p-5">
        <p>center</p>
        <Button>Button</Button>
      </div>

      <div className="w-1/5 bg-slate-200 flex flex-col items-center mx-2 rounded-md p-5">
        <div>
          <p className="text-slate-500">Ads</p>
          {/* <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
