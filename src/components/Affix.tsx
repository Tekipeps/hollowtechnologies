import { useRouter } from "next/router";
import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { Affix as AffiX, Transition } from "@mantine/core";

export default function Affix() {
  const router = useRouter();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <AffiX position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 300}>
        {(transitionStyles) => (
          <button
            title={"Scroll to top"}
            style={transitionStyles}
            onClick={() => {
              router.push("/");
              scrollTo({ y: 0 });
            }}
            className="flex gap-1 justify-center items-center p-2 text-xs font-medium text-white hover:text-black hover:bg-white bg-[#051B5A] rounded-md shadow-lg shadow-black/50 border border-white/20"
          >
            <IconArrowUp size={18} />
          </button>
        )}
      </Transition>
    </AffiX>
  );
}
