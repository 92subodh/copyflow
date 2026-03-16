import './LogosBar.css';

const colleges = [
  'MIT Pune', 'COEP', 'VIT Vellore', 'Symbiosis', 'BITS Pilani',
  'NIT Trichy', 'Fergusson College', 'Savitribai Phule University',
  'DY Patil', 'Pune University', 'SPPU', 'IIIT Hyderabad',
  'SRM University', 'Manipal', 'Amity University', 'Christ University',
];

export default function LogosBar() {
  return (
    <section className="logos-bar">
      <div className="container">
        <p className="logos-bar__label">
          <span>Students from these colleges are already printing smarter</span>
        </p>
      </div>
      <div className="logos-bar__track-wrapper">
        <div className="logos-bar__track">
          {[...colleges, ...colleges].map((name, i) => (
            <span key={i} className="logos-bar__item">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
