export function getProgress() {
  if (typeof window === "undefined") {
    return {
      stars: 0,
      completed: [],
    };
  }

  try {
    const saved = localStorage.getItem("chinnaariProgress");

    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.log("Progress unavailable");
  }

  return {
    stars: 0,
    completed: [],
  };
}

export function addProgress(activity, stars = 10) {
  if (typeof window === "undefined") return;

  try {
    const current = getProgress();

    const alreadyCompleted =
      current.completed.includes(activity);

    const updated = {
      stars:
        current.stars +
        (alreadyCompleted ? 0 : stars),

      completed: alreadyCompleted
        ? current.completed
        : [...current.completed, activity],
    };

    localStorage.setItem(
      "chinnaariProgress",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("chinnaariProgressUpdated")
    );

    return updated;
  } catch (error) {
    console.log("Unable to save progress");
  }
}

export function resetProgress() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("chinnaariProgress");

  window.dispatchEvent(
    new Event("chinnaariProgressUpdated")
  );
}
