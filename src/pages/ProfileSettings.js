<SelectFilter>
<Filter
  required={false}
  options={schoolOption}
  title={schoolName}
  setValue={setSchoolValue}
/>
<Filter
  required={false}
  options={classes}
  title={classesTitle}
  setValue={setClassesValue}
/>
<Filter
  required={false}
  options={subjects}
  title={subjectsTitle}
  setValue={setSubjectsValue}
/>
<div style={{ margin: '22px 20px' }}>
  <H3>Filter zuücksetzen</H3>
  <RefreshButton onClick={() => window.location.reload(false)}>
    <RefreshImg src={refresh}></RefreshImg>
  </RefreshButton>
</div>
</SelectFilter>

