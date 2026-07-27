import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcgMy43OTd2LS43NS43NVptLS43NSAxNi40MDZhLjc1Ljc1IDAgMCAwIDEuNSAwaC0xLjVabTEwIDBhLjc1Ljc1IDAgMCAwIDEuNSAwaC0xLjVaTTUuNTMgMy4wNDdhLjc1Ljc1IDAgMSAwIDAgMS41di0xLjVabTMuMDEgMS41YS43NS43NSAwIDAgMCAwLTEuNXYxLjVabTYuOTU1LTEuNWEuNzUuNzUgMCAwIDAgMCAxLjV2LTEuNVptMy4wMSAxLjVhLjc1Ljc1IDAgMCAwIDAtMS41djEuNVpNNS41MyAxOS40NTNhLjc1Ljc1IDAgMCAwIDAgMS41di0xLjVabTMuMDEgMS41YS43NS43NSAwIDEgMCAwLTEuNXYxLjVabTYuOTU1LTEuNWEuNzUuNzUgMCAwIDAgMCAxLjV2LTEuNVptMy4wMSAxLjVhLjc1Ljc1IDAgMSAwIDAtMS41djEuNVpNNyAzLjc5N2gtLjc1VjEyaDEuNVYzLjc5N0g3Wk03IDEyaC0uNzV2OC4yMDNoMS41VjEySDdabTAgMHYuNzVoMTB2LTEuNUg3VjEyWm0xMCAwaC0uNzV2OC4yMDNoMS41VjEySDE3Wm0wIDBoLjc1VjMuNzk3aC0xLjVWMTJIMTdaTTUuNTMgMy43OTd2Ljc1SDd2LTEuNUg1LjUzdi43NVptMS40NyAwdi43NWgxLjU0di0xLjVIN3YuNzVabTguNDk1IDB2Ljc1SDE3di0xLjVoLTEuNTA1di43NVptMS41MDUgMHYuNzVoMS41MDV2LTEuNUgxN3YuNzVaTTUuNTMgMjAuMjAzdi43NWgzLjAxdi0xLjVINS41M3YuNzVabTkuOTY1IDB2Ljc1aDMuMDF2LTEuNWgtMy4wMXYuNzVaIi8+PC9zdmc+)
 */
export const IconTextHeading: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-text-heading'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7 3.797v-.75.75Zm-.75 16.406a.75.75 0 0 0 1.5 0h-1.5Zm10 0a.75.75 0 0 0 1.5 0h-1.5ZM5.53 3.047a.75.75 0 1 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 0 0 0-1.5v1.5Zm6.955-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 0 0 0-1.5v1.5ZM5.53 19.453a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 1 0 0-1.5v1.5Zm6.955-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.01 1.5a.75.75 0 1 0 0-1.5v1.5ZM7 3.797h-.75V12h1.5V3.797H7ZM7 12h-.75v8.203h1.5V12H7Zm0 0v.75h10v-1.5H7V12Zm10 0h-.75v8.203h1.5V12H17Zm0 0h.75V3.797h-1.5V12H17ZM5.53 3.797v.75H7v-1.5H5.53v.75Zm1.47 0v.75h1.54v-1.5H7v.75Zm8.495 0v.75H17v-1.5h-1.505v.75Zm1.505 0v.75h1.505v-1.5H17v.75ZM5.53 20.203v.75h3.01v-1.5H5.53v.75Zm9.965 0v.75h3.01v-1.5h-3.01v.75Z'
      />
    </svg>
  )
}
