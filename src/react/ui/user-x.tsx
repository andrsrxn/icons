import type { Icon } from './types'

export const IconUserX: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='user-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.068c-3.572 0-6.904 2.716-7.41 6.48-.074.547.38.998.933.998h10.643a1 1 0 0 0 .73-.319l1.693-1.815c.259-.277.344-.68.18-1.023-1.235-2.6-3.926-4.32-6.769-4.32Z'
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
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457M16 16l4.674 4.674m0-4.674L16 20.674'
      />
    </svg>
  )
}
