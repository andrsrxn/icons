import type { Icon } from './types'

export const IconBeer: Icon = ({
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
      data-slot='icon-ui-beer'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.97 22.35c2.77 0 4.16 0 5.03-.84l.07-.07c.84-.87.84-2.26.84-5.03V7.65h-4.38v.47c0 1.06-.57 2.05-1.5 2.58a1 1 0 0 1-.93.03l-.34-.18-.16-.07A3 3 0 0 1 8 7.9v-.18H5.03v8.68c0 2.77 0 4.16.85 5.03l.06.07c.88.84 2.26.84 5.03.84'
        fill='currentColor'
      />
      <path
        d='M16.91 7.78v8.63c0 2.77 0 4.16-.84 5.03l-.07.07c-.87.84-2.26.84-5.03.84s-4.15 0-5.03-.84l-.06-.07c-.85-.87-.85-2.26-.85-5.03V7.78'
        stroke='currentColor'
      />
      <path d='M9.08 19.24v-4.96' stroke='currentColor' />
      <path d='M12.88 19.24v-6.2' stroke='currentColor' />
      <path d='M7.76 7.78h-4.2' stroke='currentColor' />
      <path d='M18.38 7.78h-5.75' stroke='currentColor' />
      <path
        d='M17.02 17.46h.84c1.3 0 1.95 0 2.42-.29a2 2 0 0 0 .68-.67c.29-.48.29-1.13.29-2.42 0-1.3 0-1.95-.3-2.43a2 2 0 0 0-.67-.67c-.47-.3-1.12-.3-2.42-.3h-.84'
        stroke='currentColor'
      />
      <path d='M8.6 4.2c0-1.39 1.07-2.5 2.38-2.5a2.45 2.45 0 0 1 2.38 2.5' stroke='currentColor' />
      <path
        d='M7.92 7.1c-.58 1.64.4 3.59 2.23 3.59C12 10.69 13.02 9 12.5 7.1'
        stroke='currentColor'
      />
      <path d='M5.23 7.78a2.64 2.64 0 0 1 .02-3.56c.93-1 2.43-1 3.35-.02' stroke='currentColor' />
      <path d='M16.72 7.78c.92-.98.9-2.57-.02-3.56-.93-1-2.43-1-3.35-.02' stroke='currentColor' />
    </svg>
  )
}
