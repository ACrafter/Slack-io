function Header({ type }) {
  let header;
  if (type === "default") {
    header = (
      <>
        <h1 className="text-5xl mb-5 font-bold font-sans">
          Sign in to Slack-io
        </h1>
        <p className="font-sans text-gray-600">
          We suggest using the <strong>email address you use at work.</strong>
        </p>
      </>
    );
  } else if (type === "workspace") {
    header = (
      <>
        <h1 className="text-5xl mb-5 font-bold font-sans">
          Sign in to your workspace
        </h1>
        <p className="font-sans text-gray-600">
          Enter your Slack-io workspace's URL
        </p>
      </>
    );
  } else if (type === "team") {
    header = (
      <>
        <h1 className="text-5xl mb-5 font-bold font-sans">
          Let's find your team
        </h1>
        <p className="font-sans text-gray-600">
          Enter your Slack-io workspace's URL
        </p>
      </>
    );
  } else if (type === "new") {
    header = (
      <>
        <h1 className="text-5xl mb-5 font-bold font-sans">
          First, Enter your email
        </h1>
        <p className="font-sans text-gray-600">
          Enter your Slack-io workspace's URL
        </p>
      </>
    );
  }

  return header;
}

export default Header;
