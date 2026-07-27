import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzQ5IDExLjM5MmMwLTEuODg2IDAtMi44MjktLjU4Ni0zLjQxNS0uNTg2LS41ODUtMS41MjktLjU4NS0zLjQxNC0uNTg1SDcuNjVjLTEuODg1IDAtMi44MjggMC0zLjQxNC41ODUtLjU4Ni41ODYtLjU4NiAxLjUyOS0uNTg2IDMuNDE1djQuMTM0YzAgLjM1NCAwIC41My4wMjMuNjc4YTIgMiAwIDAgMCAxLjY4IDEuNjhjLjE0OC4wMjMuMzI0LjAyMy42NzguMDIzLjI4NyAwIC40MyAwIC41NTgtLjAxN2EyIDIgMCAwIDAgMS42Mi0xLjI5Yy4wNDUtLjEyLjA3Ny0uMjYuMTQyLS41NGwuMDgzLS4zNjJjLjE0My0uNjI0LjIxNS0uOTM2LjM1NS0xLjE4NmEyIDIgMCAwIDEgMS4xODMtLjk0MmMuMjc1LS4wOC41OTUtLjA4IDEuMjM2LS4wOGgxLjU2OGMuNTggMCAuODY5IDAgMS4xMTguMDY0YTIgMiAwIDAgMSAxLjI5MiAxLjA2Yy4xMTMuMjMyLjE3LjUxNi4yODIgMS4wODRsLjA1LjI0NmMuMDY2LjMzNC4wOTkuNTAxLjE1LjY0M2EyIDIgMCAwIDAgMS41OCAxLjI5N2MuMTUuMDIzLjMyLjAyMy42NjEuMDIzLjQwOCAwIC42MTIgMCAuNzgyLS4wM2EyIDIgMCAwIDAgMS42MjctMS42MjdjLjAzLS4xNy4wMy0uMzc0LjAzLS43ODJ2LTQuMDc2WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcuOTY3IDcuMzkySDMuNjUxdjEwLjUxNWg0LjMzMk03Ljk2NyA3LjM5MlYzLjY0NGg4LjMyNnYzLjc0OG0tOC4zMjYgMGg4LjMyNm0wIDBoNC4wNTZ2MTAuNTE1aC00LjQ0MyIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguNjk2IDEzLjQ0OWg2LjY1bDEuNjQ3IDYuOTc0SDYuOTRsMS43NTctNi45NzRaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjYxNyAxMC4zNjZhLjQxLjQxIDAgMSAxLS44MTkgMCAuNDEuNDEgMCAwIDEgLjgxOSAwWiIvPjwvc3ZnPg==)
 */
export const IconPrinter: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-printer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.349 11.392c0-1.886 0-2.829-.586-3.415-.586-.585-1.529-.585-3.414-.585H7.65c-1.885 0-2.828 0-3.414.585-.586.586-.586 1.529-.586 3.415v4.134c0 .354 0 .53.023.678a2 2 0 0 0 1.68 1.68c.148.023.324.023.678.023.287 0 .43 0 .558-.017a2 2 0 0 0 1.62-1.29c.045-.12.077-.26.142-.54l.083-.362c.143-.624.215-.936.355-1.186a2 2 0 0 1 1.183-.942c.275-.08.595-.08 1.236-.08h1.568c.58 0 .869 0 1.118.064a2 2 0 0 1 1.292 1.06c.113.232.17.516.282 1.084l.05.246c.066.334.099.501.15.643a2 2 0 0 0 1.58 1.297c.15.023.32.023.661.023.408 0 .612 0 .782-.03a2 2 0 0 0 1.627-1.627c.03-.17.03-.374.03-.782v-4.076Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M7.967 7.392H3.651v10.515h4.332M7.967 7.392V3.644h8.326v3.748m-8.326 0h8.326m0 0h4.056v10.515h-4.443'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M8.696 13.449h6.65l1.647 6.974H6.94l1.757-6.974Z'
      />
      <path
        fill='currentColor'
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.617 10.366a.41.41 0 1 1-.819 0 .41.41 0 0 1 .819 0Z'
      />
    </svg>
  )
}
