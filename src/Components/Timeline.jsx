

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item`}>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-date">{event.date}</p>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
