import type { Icon } from './types'

export const IconPi: Icon = ({
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
      data-slot='pi'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M20.537 3.72a.75.75 0 0 0-1.5 0h1.5ZM3.463 8.911a.75.75 0 1 0 1.5 0h-1.5Zm7.423-2.595a.75.75 0 0 0-1.5 0h1.5ZM6.746 19.53a.75.75 0 0 0 0 1.5v-1.5Zm7.952-13.214a.75.75 0 0 0-1.5 0h1.5Zm3.324 11.927h.75-.75Zm.75-.04a.75.75 0 0 0-1.5 0h1.5ZM6.808 6.316v.75h10.384v-1.5H6.808v.75Zm10.384 0v.75a3.346 3.346 0 0 0 3.345-3.346h-1.5c0 1.02-.826 1.846-1.845 1.846v.75ZM4.212 8.912h.75c0-1.02.827-1.846 1.846-1.846v-1.5a3.346 3.346 0 0 0-3.345 3.346h.75Zm5.924-2.596h-.75v10.573h1.5V6.316h-.75Zm0 10.573h-.75a2.64 2.64 0 0 1-2.64 2.641v1.5a4.14 4.14 0 0 0 4.14-4.14h-.75Zm3.813-10.573h-.75v11.927h1.5V6.316h-.75Zm4.073 11.927h.75v-.04h-1.5v.04h.75Zm-2.037 2.037v.75a2.787 2.787 0 0 0 2.787-2.787h-1.5c0 .711-.576 1.287-1.287 1.287v.75Zm-2.037-2.037h-.75a2.787 2.787 0 0 0 2.787 2.787v-1.5c-.71 0-1.287-.576-1.287-1.287h-.75Z'
      />
    </svg>
  )
}
