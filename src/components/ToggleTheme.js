import Switch from './Switch'

const ToggleTheme = () => {
  return (
    <div className="pt-4 flex justify-between items-center">
      <h2 className="text-desaturatedbluetext font-bold">
        Dark mode
      </h2>
      <Switch />
    </div>
  )
}

export default ToggleTheme;