import type { Icon } from './types'

export const IconBlend: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-blend'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g opacity='.2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.56 15.23a7.08 7.08 0 0 0 14.15.63c-4.52.4-7.86-2.71-7.43-7.7a7.1 7.1 0 0 0-6.72 7.07'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.7 15.86a7.1 7.1 0 1 0-7.42-7.7c4.22-.54 7.88 2.58 7.43 7.7'
          fill='currentColor'
        />
      </g>
      <circle
        cx='8.95'
        cy='14.93'
        r='7.38'
        transform='rotate(90 8.95 14.93)'
        stroke='currentColor'
      />
      <circle
        cx='15.06'
        cy='9.06'
        r='7.37'
        transform='rotate(90 15.06 9.06)'
        stroke='currentColor'
      />
    </svg>
  )
}
