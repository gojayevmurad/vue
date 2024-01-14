import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'SiteNavigation', typeof __VLS_localComponents, "SiteNavigation", "SiteNavigation", "SiteNavigation"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "RouterView", "RouterView"> &
__VLS_WithComponent<'Transition', typeof __VLS_localComponents, "Transition", "Transition", "Transition">;
__VLS_components.SiteNavigation;
// @ts-ignore
[SiteNavigation,];
__VLS_components.RouterView; __VLS_components.RouterView;
// @ts-ignore
[RouterView, RouterView,];
__VLS_components.Transition; __VLS_components.Transition;
// @ts-ignore
[Transition, Transition,];
{
const __VLS_0 = ({} as 'SiteNavigation' extends keyof typeof __VLS_ctx ? { 'SiteNavigation': typeof __VLS_ctx.SiteNavigation; } : typeof __VLS_resolvedLocalAndGlobalComponents).SiteNavigation;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { SiteNavigation: typeof __VLS_0; }).SiteNavigation;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { RouterView: typeof __VLS_5; }).RouterView;
({} as { RouterView: typeof __VLS_5; }).RouterView;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const [{ Component }] = __VLS_getSlotParams((__VLS_8.slots!).default);
{
const __VLS_10 = ({} as 'Transition' extends keyof typeof __VLS_ctx ? { 'Transition': typeof __VLS_ctx.Transition; } : typeof __VLS_resolvedLocalAndGlobalComponents).Transition;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, name: ("fade"), mode: ("out-in"), enterActiveClass: ("transition-opacity duration-300"), enterFromClass: ("opacity-0"), enterToClass: ("opacity-100"), leaveActiveClass: ("transition-opacity duration-300"), leaveFromClass: ("opacity-100"), leaveToClass: ("opacity-0"), }));
({} as { Transition: typeof __VLS_10; }).Transition;
({} as { Transition: typeof __VLS_10; }).Transition;
const __VLS_12 = __VLS_11({ ...{}, name: ("fade"), mode: ("out-in"), enterActiveClass: ("transition-opacity duration-300"), enterFromClass: ("opacity-0"), enterToClass: ("opacity-100"), leaveActiveClass: ("transition-opacity duration-300"), leaveFromClass: ("opacity-100"), leaveToClass: ("opacity-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, name: ("fade"), mode: ("out-in"), enterActiveClass: ("transition-opacity duration-300"), enterFromClass: ("opacity-0"), enterToClass: ("opacity-100"), leaveActiveClass: ("transition-opacity duration-300"), leaveFromClass: ("opacity-100"), leaveToClass: ("opacity-0"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = (Component);
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
__VLS_8.slots!['' /* empty slot name completion */];
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
