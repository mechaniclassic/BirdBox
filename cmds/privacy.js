module.exports = {
	name: 'privacy',
	description: 'Privacy notice of information on data management.',
	execute(message, args, vars) {
		const devArray = vars.devArray;

		const EmbedBuilder = vars.EmbedBuilder;

		const creditsEmbed = new EmbedBuilder()
			.setColor(0xAA00FF)
			.setTitle('Privacy Policy')
			.setAuthor({ name: 'BirdBox', iconURL: 'https://cdn.discordapp.com/avatars/803811104953466880/5bce4f0ba438015ec65f5b9cac11c8e3.png?size=256' })
			.setDescription('Click the link for more information about the data BirdBox stores, how it is stored, and the license BirdBox uses.')
			.addFields(
				{ name: 'Link', value: 'https://thebirdwashere.thejasperhouse.net/birdbox/privacy.html' }
			);
        
		message.channel.trysend({ embeds: [creditsEmbed] });
	}
}