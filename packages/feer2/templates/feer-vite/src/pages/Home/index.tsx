import './index.less'

export default function Home() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='App'>
      <div className='main'>
        <img
          src='https://s1.ax1x.com/2020/06/16/NFcpdJ.png'
          className='mb-10px feer-logo'
          alt='logo'
        />
        <p>
          <button
            type='button'
            className='px-8px rounded-8px text-amber-300 feer-btn'
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="feer-edit">Edit <code>Home/index.tsx</code> and save to reload.</p>
      </div>
    </div>
  )
}
