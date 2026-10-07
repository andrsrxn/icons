import { DrawerIcon } from '@/components/shared/drawer-icon'

export default async function InterceptedIconPage({
  params,
}: {
  params: Promise<{ icon: string }>
}) {
  const { icon: iconName } = await params
  return <DrawerIcon group='ui' iconName={iconName} />
}
