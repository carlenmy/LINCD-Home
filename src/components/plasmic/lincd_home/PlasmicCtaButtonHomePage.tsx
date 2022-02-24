// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vxhLNdYPiZkVHCUwHukgLS
// Component: v_1uoljXHS
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_lincd_home.module.css"; // plasmic-import: vxhLNdYPiZkVHCUwHukgLS/projectcss
import sty from "./PlasmicCtaButtonHomePage.module.css"; // plasmic-import: v_1uoljXHS/css

export type PlasmicCtaButtonHomePage__VariantMembers = {};

export type PlasmicCtaButtonHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicCtaButtonHomePage__VariantsArgs;
export const PlasmicCtaButtonHomePage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCtaButtonHomePage__ArgsType = {};
type ArgPropType = keyof PlasmicCtaButtonHomePage__ArgsType;
export const PlasmicCtaButtonHomePage__ArgProps = new Array<ArgPropType>();

export type PlasmicCtaButtonHomePage__OverridesType = {
  root?: p.Flex<"button">;
  text?: p.Flex<"div">;
};

export interface DefaultCtaButtonHomePageProps {
  className?: string;
}

function PlasmicCtaButtonHomePage__RenderFunc(props: {
  variants: PlasmicCtaButtonHomePage__VariantsArgs;
  args: PlasmicCtaButtonHomePage__ArgsType;
  overrides: PlasmicCtaButtonHomePage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        sty.root
      )}
      onClick={"requestAccess()" as const}
      style={"" as const}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Request early access"}
      </div>
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtaButtonHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtaButtonHomePage__VariantsArgs;
    args?: PlasmicCtaButtonHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtaButtonHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCtaButtonHomePage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCtaButtonHomePage__ArgProps,
      internalVariantPropNames: PlasmicCtaButtonHomePage__VariantProps
    });

    return PlasmicCtaButtonHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaButtonHomePage";
  } else {
    func.displayName = `PlasmicCtaButtonHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaButtonHomePage = Object.assign(
  // Top-level PlasmicCtaButtonHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCtaButtonHomePage
    internalVariantProps: PlasmicCtaButtonHomePage__VariantProps,
    internalArgProps: PlasmicCtaButtonHomePage__ArgProps
  }
);

export default PlasmicCtaButtonHomePage;
/* prettier-ignore-end */
