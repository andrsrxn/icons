import type { Icon } from './types'

export const IconCurrencyCircleIn: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-currency-circle-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M12 22.31a10.31 10.31 0 1 1 9.11-5.5l-1.72-.78-.08 3.24A10.3 10.3 0 0 1 12 22.31'
          fillRule='evenodd'
          clipRule='evenodd'
          fill='currentColor'
        />
        <path
          d='M15.56 8.5c-.32-1.03-1.8-1.83-3.56-1.83s-3.68.7-3.68 2.78c0 3.95 6.58 1.1 7.3 4.56'
          stroke='currentColor'
        />
        <path d='M8.32 15.46c.58 1.06 1.88 1.87 3.68 1.87q.73 0 1.44-.22' stroke='currentColor' />
        <path d='M12 6.67v-1.3' stroke='currentColor' />
        <path d='M12 18.63v-1.3' stroke='currentColor' />
        <path d='M14.86 21.9a10.32 10.32 0 1 1 7.41-9' stroke='currentColor' />
        <path d='M19.33 22.52v-6.24' stroke='currentColor' />
        <path
          d='m22.53 18.3-1.07-1.07c-1-1-1.5-1.5-2.13-1.5s-1.12.5-2.12 1.5l-1.08 1.07'
          stroke='currentColor'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
