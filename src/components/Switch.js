import { useState } from "react";

const Switch = () => {

  const [theme, setTheme] = useState(false);
  const handleClick = () => setTheme(!theme)

  return (
    <div className={theme === true ? 'bg-togglelight px-5 py-1 flex justify-center items-center rounded-full' : 'bg-gradient-to-r from-toggledarkfrom to-toggledarkto px-5 py-1 flex justify-center items-center rounded-full'}>
      <input className="h-5 w-5 appearance-none bg-darkdesaturatedbluecardbg relative rounded-full transition transform -translate-x-4 ease-linear duration-200 checked:bg-whitebg checked:translate-x-4" type="checkbox" name="toggle" id="toggle" onClick={handleClick}/>
      </div>
  )
}

export default Switch;