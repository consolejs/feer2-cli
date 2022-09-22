import './index.less'

export default function Welcome() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='https://s1.ax1x.com/2020/06/16/NFcpdJ.png'
          className='App-logo mb-24px'
          alt='logo'
        />
        <p>Hello Feer!</p>
        <p>
          <button
            type='button'
            className='px-8px rounded-8px'
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>Welcome/index.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}
