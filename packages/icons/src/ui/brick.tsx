import type { Icon } from './types'

export const IconBrick: Icon = ({
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
      data-slot='icon-ui-brick'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.77 13.94c0-1.29 0-1.94.23-2.44a2.5 2.5 0 0 1 1.22-1.21c.5-.23 1.14-.23 2.44-.23h8.9c1.29 0 1.94 0 2.44.23q.82.4 1.21 1.21c.23.5.23 1.15.23 2.44 0 1.3 0 1.94-.23 2.44A2.5 2.5 0 0 1 17 17.6c-.5.23-1.15.23-2.44.23h-8.9c-1.3 0-1.94 0-2.44-.23A2.5 2.5 0 0 1 2 16.38c-.23-.5-.23-1.14-.23-2.44'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.44 17.83H4.77c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56v-1.77c0-1.42 0-2.12.44-2.56s1.15-.44 2.56-.44h10.67c1.42 0 2.13 0 2.56.44s.44 1.14.44 2.56v1.77c0 1.41 0 2.12-.44 2.56-.43.44-1.14.44-2.56.44'
        stroke='currentColor'
      />
      <path
        d='m2.23 10.47 4.1-3.38c.54-.46.82-.68 1.15-.8s.68-.12 1.4-.12h9.35c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v1.23c0 .8 0 1.2-.15 1.56s-.42.65-.97 1.22l-3.16 3.28'
        stroke='currentColor'
      />
      <path d='m21.42 6.77-3.5 3.56' stroke='currentColor' />
    </svg>
  )
}
