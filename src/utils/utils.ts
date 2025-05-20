import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import type { StampOptions } from "@/index.types";

function getStampOptions(options: Partial<StampOptions>): StampOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS,
    ...options,
  };
}

export {
  getStampOptions,
};