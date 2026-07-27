import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTYtNy40MSA2LjQ4LS4wNzQuNTQ3LjM4Ljk5OC45MzMuOTk4aDEyLjk1NGMuNTUzIDAgMS4wMDgtLjQ1LjkzNC0uOTk4LS41MDctMy43NjQtMy44NC02LjQ4LTcuNDExLTYuNDhaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTYuODA3IDguMjYxYTQuODA3IDQuODA3IDAgMSAxLTkuNjE0IDAgNC44MDcgNC44MDcgMCAwIDEgOS42MTQgMFoiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxMy4wNjhhNC44MDcgNC44MDcgMCAxIDAgMC05LjYxMyA0LjgwNyA0LjgwNyAwIDAgMCAwIDkuNjEzWm0wIDBjLTMuODggMC03LjQ3NyAzLjIwNS03LjQ3NyA3LjQ3OE0xMiAxMy4wNjhjLjg2OCAwIDEuNzIxLjE2IDIuNTI0LjQ1N202LjA4MiA0LjI2MkgxNSIvPjwvc3ZnPg==)
 */
export const IconUserMinus: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-user-minus'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.068c-3.572 0-6.904 2.716-7.41 6.48-.074.547.38.998.933.998h12.954c.553 0 1.008-.45.934-.998-.507-3.764-3.84-6.48-7.411-6.48Z'
        />
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457m6.082 4.262H15'
      />
    </svg>
  )
}
