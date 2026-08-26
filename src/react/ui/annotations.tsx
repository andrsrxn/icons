import type { Icon } from './types'

export const IconAnnotations: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-annotations'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.75 17c.58 0 .86 0 1.1-.03a3 3 0 0 0 2.48-2.48c.04-.24.04-.53.04-1.1v-2.86c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.63c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v2.86c0 .57 0 .86.04 1.1a3 3 0 0 0 2.48 2.48c.24.04.52.04 1.1.04h.36a3 3 0 0 1 1.6.58l1.61 1.04c1.06.69 1.59 1.03 2.18 1.03s1.12-.34 2.18-1.03l1.6-1.04.31-.2a3 3 0 0 1 1.3-.38z'
        fill='currentColor'
      />
      <path
        d='M17.36 17c.94 0 1.41 0 1.8-.1a3 3 0 0 0 2.1-2.1c.11-.4.11-.86.11-1.8v-2.47c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.63c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v2.41c0 1 0 1.49.12 1.9a3 3 0 0 0 2.06 2.05c.4.12.9.12 1.88.12.46 0 .69 0 .9.03a3 3 0 0 1 1.46.63c.17.14.32.31.63.65l.14.14c.68.74 1.01 1.1 1.4 1.28a2 2 0 0 0 1.58 0c.38-.15.73-.52 1.42-1.24l.22-.24c.3-.31.44-.47.6-.6a3 3 0 0 1 1.47-.63c.2-.02.42-.02.84-.02M6.55 9.4h10.9m-9.23 3.65h7.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
