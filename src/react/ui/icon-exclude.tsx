import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjE1NyA4LjY5NEgxMi44MWMtMS44NyAwLTIuODA2IDAtMy4zODcuNTgtLjU4LjU4Mi0uNTggMS41MTctLjU4IDMuMzg3djIuNWgyLjM0NWMxLjg3IDAgMi44MDYgMCAzLjM4Ny0uNTgxLjU4LS41ODEuNTgtMS41MTcuNTgtMy4zODd2LTIuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC44NDMgMTUuMTZoMi4zNDZjMS44NyAwIDIuODA2IDAgMy4zODctLjU4LjU4LS41ODEuNTgtMS41MTcuNTgtMy4zODd2LTIuNWgtMi4zNDVjLTEuODcgMC0yLjgwNiAwLTMuMzg3LjU4Mi0uNTguNTgtLjU4IDEuNTE2LS41OCAzLjM4NnYyLjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy41ODIgMTEuMTkzYzAgMS44NyAwIDIuODA2LjU4IDMuMzg3LjU4Mi41OCAxLjUxNy41OCAzLjM4Ny41OGgzLjY0YzEuODcgMCAyLjgwNiAwIDMuMzg3LS41OC41OC0uNTgyLjU4LTEuNTE3LjU4LTMuMzg3di0zLjY0YzAtMS44NyAwLTIuODA1LS41OC0zLjM4Ni0uNTgxLS41ODEtMS41MTctLjU4MS0zLjM4Ny0uNTgxSDcuNTVjLTEuODcgMC0yLjgwNSAwLTMuMzg2LjU4LS41ODEuNTgyLS41ODEgMS41MTctLjU4MSAzLjM4N3YzLjY0WiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguODQzIDE2LjMwMWMwIDEuODcgMCAyLjgwNi41ODEgMy4zODcuNTgxLjU4IDEuNTE2LjU4IDMuMzg3LjU4aDMuNjRjMS44NyAwIDIuODA1IDAgMy4zODYtLjU4LjU4MS0uNTgxLjU4MS0xLjUxNi41ODEtMy4zODd2LTMuNjRjMC0xLjg3IDAtMi44MDUtLjU4LTMuMzg2LS41ODItLjU4MS0xLjUxNy0uNTgxLTMuMzg3LS41ODFoLTMuNjRjLTEuODcgMC0yLjgwNiAwLTMuMzg3LjU4LS41OC41ODItLjU4IDEuNTE3LS41OCAzLjM4N3YzLjY0WiIvPjwvc3ZnPg==)
 */
export const IconExclude: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-exclude'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M15.157 8.694H12.81c-1.87 0-2.806 0-3.387.58-.58.582-.58 1.517-.58 3.387v2.5h2.345c1.87 0 2.806 0 3.387-.581.58-.581.58-1.517.58-3.387v-2.5Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M8.843 15.16h2.346c1.87 0 2.806 0 3.387-.58.58-.581.58-1.517.58-3.387v-2.5h-2.345c-1.87 0-2.806 0-3.387.582-.58.58-.58 1.516-.58 3.386v2.5Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.582 11.193c0 1.87 0 2.806.58 3.387.582.58 1.517.58 3.387.58h3.64c1.87 0 2.806 0 3.387-.58.58-.582.58-1.517.58-3.387v-3.64c0-1.87 0-2.805-.58-3.386-.581-.581-1.517-.581-3.387-.581H7.55c-1.87 0-2.805 0-3.386.58-.581.582-.581 1.517-.581 3.387v3.64Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M8.843 16.301c0 1.87 0 2.806.581 3.387.581.58 1.516.58 3.387.58h3.64c1.87 0 2.805 0 3.386-.58.581-.581.581-1.516.581-3.387v-3.64c0-1.87 0-2.805-.58-3.386-.582-.581-1.517-.581-3.387-.581h-3.64c-1.87 0-2.806 0-3.387.58-.58.582-.58 1.517-.58 3.387v3.64Z'
      />
    </svg>
  )
}
