// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bfQsSo56x9wb8mj8bupC2W
// Component: nbBRPGUp0KIT

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Logo from "../../Logo"; // plasmic-import: 5Hm72LC0L9FZ/component
import Button from "../../Button"; // plasmic-import: R_KEzyNULLo4/component

import { useScreenVariants as useScreenVariantseTv4QlhhDPg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eTV4QLHH-dPg/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bfQsSo56x9wb8mj8bupC2W/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: nbBRPGUp0KIT/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: PPuxfdcd4rrs/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: uc3RBWXtBfrl/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: v123S3V4UAm-/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: MtEhKQ8Vzgbk/icon

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  logo?: Flex__<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseTv4QlhhDPg()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tFwuh)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column___4XFdS)}>
            <div className={classNames(projectcss.all, sty.freeBox__e3CRx)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0I6Uk
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__qWAxU)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__eDkOp)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__c5TBh)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__tcsD8)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg___40JF)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__tkGo)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__alPiW
              )}
            >
              {"Menu"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__hMQlG)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__r0Bav)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__l46BL)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hbkzS
                )}
              >
                {"Product"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___0MgmK)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__i4JoG)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rM4QI)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s5Tg4
                )}
              >
                {"Purchase"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__vmeK)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__y7Uhj)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___7XSq)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ptGVu
                )}
              >
                {"How it Work"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__uIwZz)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__maiFv)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__iLu7I)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wClu1
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__blnK8)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__m8T7M
              )}
            >
              {"Help"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__i1LwD)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__my1Q5)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rHIqR)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zmM4B
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__lfGe)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__wzkzb)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__kvQe9)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3M59Q
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__fGgTy)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__dAfY
              )}
            >
              {"Company"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__g3Tc5)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___9Cj54)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__uu9Cv)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zEi6W
                )}
              >
                {"Our Team"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__bqdyp)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__evlo8)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__cMSfp)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pIlI6
                )}
              >
                {"Partner with us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__mbtNy)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___7M2RT)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__agOov)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tCctb
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__j7HQ1)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aHtva
          )}
        >
          {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */