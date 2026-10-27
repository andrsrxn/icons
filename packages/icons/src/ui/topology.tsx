import type { Icon } from './types'

export const IconTopology: Icon = ({
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
      data-slot='icon-ui-topology'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='3.81'
        cy='11.97'
        r='2.09'
        transform='rotate(-45 3.81 11.97)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='12.03'
        cy='20.19'
        r='2.09'
        transform='rotate(-45 12.03 20.19)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='11.97'
        cy='3.81'
        r='2.09'
        transform='rotate(-45 11.97 3.81)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='20.19'
        cy='12.03'
        r='2.09'
        transform='rotate(-45 20.19 12.03)'
        fill='currentColor'
      />
      <circle
        cx='3.81'
        cy='11.97'
        r='2.09'
        transform='rotate(-45 3.81 11.97)'
        stroke='currentColor'
      />
      <circle
        cx='12.03'
        cy='20.19'
        r='2.09'
        transform='rotate(-45 12.03 20.19)'
        stroke='currentColor'
      />
      <circle
        cx='11.97'
        cy='3.81'
        r='2.09'
        transform='rotate(-45 11.97 3.81)'
        stroke='currentColor'
      />
      <circle
        cx='20.19'
        cy='12.03'
        r='2.09'
        transform='rotate(-45 20.19 12.03)'
        stroke='currentColor'
      />
      <path d='m10.56 18.71-5.27-5.27' stroke='currentColor' />
      <path d='m18.71 10.56-5.27-5.27' stroke='currentColor' />
      <path d='m18.68 13.48-5.2 5.2' stroke='currentColor' />
      <path d='m10.52 5.32-5.2 5.2' stroke='currentColor' />
    </svg>
  )
}
