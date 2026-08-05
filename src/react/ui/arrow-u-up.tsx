import type { Icon } from './types'

export const IconArrowUUp: Icon = ({
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
      data-slot='arrow-u-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M11.143 5.983a.75.75 0 1 0 1.062 1.06l-.53-.53-.532-.53Zm1.362-.302.53.53-.53-.53Zm5.66-.003-.53.53.53-.53Zm.305 1.366a.75.75 0 1 0 1.06-1.061l-.53.53-.53.53Zm-2.383-3.367a.75.75 0 0 0-1.5 0h1.5ZM7.361 5.915a.75.75 0 0 0-1.5 0h1.5Zm4.313.598.531.53.83-.832-.53-.53-.53-.53-.832.832.531.53Zm6.49-.835-.53.53.836.836.53-.53.53-.531-.835-.835-.53.53Zm-5.659.003.53.53c.682-.683 1.141-1.141 1.529-1.437.37-.283.586-.347.77-.347v-1.5c-.645 0-1.177.27-1.681.655-.486.372-1.027.916-1.679 1.569l.531.53Zm5.66-.003.53-.53c-.652-.653-1.194-1.196-1.68-1.568-.505-.384-1.037-.654-1.682-.653v.75l.001.75c.185 0 .4.063.77.346.389.296.848.753 1.53 1.435l.53-.53Zm-2.828-2.001h-.75V15.96h1.5V3.677h-.75ZM6.611 15.96h.75V5.915h-1.5V15.96h.75Zm4.363 4.362v-.75a3.613 3.613 0 0 1-3.613-3.612h-1.5a5.113 5.113 0 0 0 5.113 5.112v-.75Zm4.363-4.362h-.75a3.613 3.613 0 0 1-3.613 3.612v1.5a5.113 5.113 0 0 0 5.113-5.112h-.75Z'
      />
    </svg>
  )
}
