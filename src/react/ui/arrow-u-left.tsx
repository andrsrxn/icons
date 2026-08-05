import type { Icon } from './types'

export const IconArrowULeft: Icon = ({
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
      data-slot='arrow-u-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M6.12 13.141a.75.75 0 1 0 1.059-1.062l-.53.531-.53.531Zm-.304-1.362.53-.53-.53.53Zm-.002-5.66.53.531-.53-.53Zm1.365-.304a.75.75 0 1 0-1.06-1.06l.53.53.53.53ZM3.812 8.197a.75.75 0 1 0 0 1.5v-1.5Zm2.239 8.726a.75.75 0 0 0 0 1.5v-1.5Zm.598-4.313.53-.53-.833-.831-.53.53-.53.531.833.831.53-.53Zm-.835-6.49.53.53.835-.835-.53-.53-.53-.53-.836.834.53.53Zm.002 5.66.53-.531c-.683-.682-1.14-1.141-1.437-1.529-.283-.37-.347-.585-.347-.77h-.75l-.75.001c0 .645.27 1.177.656 1.68.371.487.916 1.028 1.569 1.68l.53-.532Zm-.002-5.66-.53-.53c-.653.652-1.197 1.193-1.568 1.68-.385.504-.654 1.036-.654 1.681h1.5c0-.185.064-.4.347-.771.295-.388.753-.848 1.435-1.53l-.53-.53ZM3.812 8.947v.75h12.284v-1.5H3.812v.75Zm12.284 8.726v-.75H6.051v1.5h10.045v-.75Zm4.363-4.363h-.75a3.613 3.613 0 0 1-3.613 3.613v1.5a5.113 5.113 0 0 0 5.113-5.113h-.75Zm-4.363-4.363v.75a3.613 3.613 0 0 1 3.613 3.613h1.5a5.113 5.113 0 0 0-5.113-5.113v.75Z'
      />
    </svg>
  )
}
