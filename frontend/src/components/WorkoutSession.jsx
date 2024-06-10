import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          This workout involves short bursts of intense exercise followed by
          brief rest periods. It's highly effective for burning calories and
          improving cardiovascular fitness in a short amount of time.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Featured bootcamps at the gym offer high-intensity, group-based
          workouts designed to challenge and engage participants of all fitness
          levels
        </p>
        <div className="bootcamps">
          <div>
            <h4>Dynamic and Engaging Workouts</h4>
            <p>
              Featured bootcamps at the gym provide a high-energy, group-based
              workout experience that caters to individuals of all fitness
              levels. These sessions blend cardio, strength training, and
              functional movements into an intense, comprehensive fitness
              regimen. Participants can expect to engage in a variety of
              exercises designed to challenge different muscle groups and
              improve overall fitness.
            </p>
          </div>
          <div>
            <h4>Expert Guidance and Personalized Training</h4>
            <p>
              The workouts are led by experienced and certified instructors who
              bring expertise and enthusiasm to each session. Their guidance
              ensures that exercises are performed safely and effectively,
              maximizing the benefits while minimizing the risk of injury.
              Instructors also offer modifications and progressions, allowing
              each participant to work at their own pace and ability level.
            </p>
          </div>
          <div>
            <h4>Community and Camaraderie</h4>
            <p>
              One of the key benefits of gym bootcamps is the sense of community
              and camaraderie they foster. Working out in a group setting
              provides motivation and accountability, as participants encourage
              each other to push through challenging exercises and celebrate
              milestones together.
            </p>
          </div>
          <div>
            <h4>Versatility and Adaptability in Fitness</h4>
            <p>
              Gym bootcamps are designed to be versatile and adaptable, often
              incorporating the latest fitness trends and techniques. This
              ensures that workouts remain fresh and exciting, with new
              challenges to keep participants engaged. Whether the goal is
              weight loss, muscle building, or overall health improvement,
              bootcamps offer a well-rounded approach to fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
