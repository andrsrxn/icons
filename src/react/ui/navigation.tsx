import type { Icon } from './types'

export const IconNavigation: Icon = ({
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
      data-slot='navigation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M9.146 19.159 5.119 7.611c-.592-1.699-.888-2.548-.444-2.992.444-.444 1.293-.147 2.991.445L19.246 9.1c1.042.363 1.563.545 1.573.89.01.343-.5.555-1.518.978l-5.56 2.309c-.19.079-.285.118-.356.19-.07.07-.109.166-.187.358l-2.181 5.38c-.42 1.033-.629 1.55-.975 1.541-.345-.009-.529-.535-.896-1.588Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.146 19.159 5.119 7.611c-.592-1.699-.888-2.548-.444-2.992.444-.444 1.293-.147 2.991.445L19.246 9.1c1.042.363 1.563.545 1.573.89.01.343-.5.555-1.518.978l-5.56 2.309c-.19.079-.285.118-.356.19-.07.07-.109.166-.187.358l-2.181 5.38c-.42 1.033-.629 1.55-.975 1.541-.345-.009-.529-.535-.896-1.588Z'
      />
    </svg>
  )
}
